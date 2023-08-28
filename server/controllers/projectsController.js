const project =require('../model/project');


const getAllProjects = async (req, res) => {
    const projects= await project.find({"userID": req.body.userID});
    if(!projects) return res.status(204).json({'message':'No projects found.'})
    res.json(projects);
}

const createNewProject = async(req, res) => {
     if(!req?.body?.projectName || !req?.body?.technology){
        return res.status(400).json({'message':'project name and technology is required'})
     }
    try {
    const result=await project.create({
     userID:req.body.userID,
     projectName: req.body.projectName,
     projectURL: req.body.projectURL,
     technology: req.body.technology,
     description: req.body.description,
     
    });
    res.status(201).json(result);
    }
    catch(err){
       console.log(err);
    }
   

    
}

const updateProject = async(req, res) => {
    if(!req?.body?.id){
        return res.status(400).json({'message':'ID parameter is required '})
    }
   const aproject=await project.findOne({_id:req.body.id}).exec();

    if (!aproject) {
        return res.status(204).json({ "message": `No project matches ID ${req.body.id}` });
    }
    if (req.body?.userID) aproject.userID = req.body.userID;
    if (req.body?.projectname) aproject.projectName = req.body.projectName;
    if (req.body?.projectURL) aproject.projectURL = req.body.projectURL;
    if (req.body?.description) aproject.description= req.body.description;
    if (req.body?.technology) aproject.technology = req.body.technology;
    const result=await aproject.save();
    res.json(result);
}

const deleteProject = async (req, res) => {
  if(!req?.body?.id) return res.status(400).json({'message':' ID required'})
   const aproject=await project.findOne({_id:req.body.id}).exec();
  if (!aproject) {
        return res.status(204).json({ "message": ` ID ${req.body.id} not found` });
    }
    const result=await project.deleteOne({_id:req.body.id});
    res.json(result);
}

const getProject = async(req, res) => {
    //corrected method
    if(!req?.params?.id)return res.status(400).json({'message':' ID is required'})
     const aproject = await project.findOne({_id:req.params.id})
    if (!aproject ) {
        return res.status(400).json({ "message": `no project  matches ID ${req.params.id} not found` });
    }
    res.json(aproject);
}
                                                                            
module.exports = {
    getAllProjects,
    createNewProject,
    updateProject,
    deleteProject,
    getProject
}