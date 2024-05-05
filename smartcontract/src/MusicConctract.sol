// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

/*
  Quem deve passar os parametros para as funções addMember e addPlataforms : Empresário ou Org (Nós) ?

  No frontend deve ter uma API que pega o endereço deste contrato e passa para plataforma, para enviar
  o dinheiro das views das musicas.
*/

contract MusicContract is ERC1155, Ownable, ERC1155Pausable {

    error URIQueryForNonExistentToken();
    event addedMembers(address[]);

    Plataform[] public plataforms;
    Members[] public members;
    uint256 public totalReceived;
    mapping(address => bool) public authorizedPlatform;

    struct Members {
        address member;
        uint256 percentage;
    }

    struct Plataform {
        address platform;
    }

    // Ao fazer o deploy, é passado os endereços dos membros, e suas respectivas porcentagens
    constructor(address initialOwner) 
    ERC1155("https://ipfs.io/ipfs/QmeNfW3qpdsG5EZK5xPVDjFA8HJskSKxT3rnGCYcXhunns/{id}.json")
    Ownable(initialOwner) {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function addMembers(address[] memory members_, uint256[] memory percentages_) public onlyOwner{
        require(members_.length == percentages_.length, "Mismatch between recipients and percentages arrays");
        
        // Inicializa o array de destinatários
        for (uint256 i = 0; i < members_.length; i++) {
            members.push(Members(members_[i], percentages_[i]));
        }

        // Adiciona a porcentagem de cada endereço
        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < members_.length; i++) {
            totalPercentage += members[i].percentage;
        }
        require(totalPercentage == 100, "Total percentages must sum up to 100");
        emit addedMembers(members_);
    }

    // Musica tokenizada
    // Adiciona as plataformas que poderão tocar a musica (E tbm receberaão um NFT quem simboliza a musica)
    function addPlataforms(address[] memory plataforms_) public onlyOwner{
        // Inicializa o array de endereços das plataformas, e minta um NFT da musica, para dar direito de toca-la
        // Só as plataformas que tem o NFT tem direito de tocar a musica
        for (uint256 i = 0; i < plataforms_.length; i++) {
            plataforms.push(Plataform(plataforms_[i]));
            authorizedPlatform[plataforms_[i]] = true;
            _mint(plataforms_[i], 0, 1, "");
        }
    }

    // Dois tipos de saque : Na hora que cair dinheiro no contrato ser enviado direto para as wallets
    // Ou função onde algume possa solicitar o saque.
    // Complexo fazer com que cada um venha e saque sua porcentagem.

    // Função que permite receber dinheiro enviado pela plataforma
    receive() external payable {
        require(msg.value > 0, "Must send some Ether");
        totalReceived += msg.value;

        uint256 totalPercentage = 0;
        for (uint256 i = 0; i < members.length; i++) {
            totalPercentage += members[i].percentage;
        }
        require(totalPercentage == 100, "Total percentages must sum up to 100");

        uint256 amountPerRecipient = totalReceived;
        totalReceived = 0; // Reset totalReceived
        for (uint256 i = 0; i < members.length; i++) {
            uint256 amountToTransfer = amountPerRecipient * members[i].percentage / 100;
            (bool success, ) = payable(members[i].member).call{value: amountToTransfer}("");
            require(success, "Transfer failed");
        }
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    //Função para adicionar e retornar o .json na URL do metadados IPFS.
    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        // if (!exists(_tokenId)) revert URIQueryForNonExistentToken();
        return string(abi.encodePacked("https://ipfs.io/ipfs/QmeNfW3qpdsG5EZK5xPVDjFA8HJskSKxT3rnGCYcXhunns/", Strings.toString(_tokenId), ".json"));
    }

    function isAuthorizedPlatform(address user) public view returns (bool) {
        return authorizedPlatform[user];
    }

    function contractURI() public pure returns (string memory) {
        return
            "https://bafybeiafhv2icxrvcpdgmceebyfxauf4wae7gzso4xmxe5nr7dgbuqa4fa.ipfs.dweb.link/colletion-name.json";
    } 

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable)
    {
        super._update(from, to, ids, values);
    }
}