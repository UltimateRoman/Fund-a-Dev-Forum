pragma solidity ^0.5.0;

contract DPFforum {
    uint public pCount = 0;

    mapping (uint => Project) public projects;

    struct Project {
        uint id;
        string tag;
        string image;
        string description;
        uint fundrec;
        address payable devp;
    }

    event projectListed(
        uint id,
        string tag,
        string image,
        string description,
        uint fundrec,
        address payable devp
    );

    event projectFunded(
        uint id,
        string tag,
        string image,
        string description,
        uint fundrec,
        address payable devp
    );

    function addProject(string memory _tag, string memory _description, string memory _image) public{
        require(bytes(_description).length > 0);
        require(bytes(_tag).length > 0);
        pCount++;
        projects[pCount] = Project(pCount, _tag, _image, _description, 0,msg.sender);
        emit projectListed(pCount, _tag, _image, _description, 0,msg.sender);
    }

    function fundProject(uint _id) public payable{
        require(_id > 0 && _id <= pCount);
        Project memory _project = projects[_id];
        address payable _devp = _project.devp;
        address(_devp).transfer(msg.value);
        _project.fundrec = _project.fundrec + msg.value;
        projects[_id] = _project;
        emit projectFunded(pCount, _project.tag, _project.image, _project.description, _project.fundrec, _devp);
    }
}