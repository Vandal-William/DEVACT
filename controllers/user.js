const userData = require('../dataMapper/user');
const dataPorfolio = require('../dataMapper/portfolioData');

const user = {

    getIndexPage: async (req, res) => {
        const user = "william";
        const params = "william";
        const data = await dataPorfolio.getPorfolioData(params);
        console.log(data)
        res.render('devact', {user, params, data})
    },

    updateUser: async (req, res) => {

        const { user_id, ...updates } = req.body;
        const userFields = Object.keys(updates); 
    
        // Update each field dynamically
        for (const field of userFields) {
            await userData.updateUserField(user_id, field, updates[field]);
        }
    
        return res.redirect(`/`);
    },
    

    updatePicture: async (req, res) => {
        const {user_id} = req.body;
        if (req.file){
            const bddPath = '/userImg/' + req.file.filename;
            const updatePicture = await userData.updateUserPicture(bddPath, user_id);
            return res.redirect(`/`);
        }else {
            return res.redirect(`/`);
        }
    },

    addNewSkill: async (req, res) => {
        const {skill_name, skill_description, user_username} = req.body
        const addNewSkill = await userData.addUserNewSkill(skill_name, skill_description, user_username);
        return res.redirect(`/`);
    },

    updateSkill: async (req, res) => {
        const {skill_name, skill_description, user_username, skill_id} = req.body;
        const updateSkill = await userData.updateUserSkill(skill_name, skill_description, user_username, skill_id);
        return res.redirect(`/`);
    },

    addProject: async (req, res) => {
        
        let project_picture_path;
      
        if (req.file) {
          project_picture_path = '/userImg/' + req.file.filename;
        } else {
          project_picture_path = '/img/projet1.jpg';
        }
      
        const { project_picture, project_user_username, ...projects } = req.body;
      
        await userData.addUserProject(project_picture_path, project_user_username, projects);
      
        return res.redirect(`/`);
    },
      

    updateProject: async (req, res) => {

        let project_picture_path;

        const { project_picture, project_id, ...projects } = req.body;
        

        if(req.file){

            project_picture_path = '/userImg/' + req.file.filename;

            const updateProject = await userData.updateUserProjectWithPicture(project_picture_path, project_id, projects);

            return res.redirect(`/`);
        }else{

            const updateProject = userData.updateUserProjectWithoutPicture(project_id, projects);

            return res.redirect(`/`);
        }
    },

}

module.exports = user;