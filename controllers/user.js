const userData = require('../dataMapper/user');

const user = {

    getIndexPage: (req, res) => {
        const user = "william";
        const params = "william";
        res.render('index', {user, params})
    },

    updateUser: async (req, res) => {

        const { user_id, ...updates } = req.body;
        const userFields = Object.keys(updates); 
    
        // Update each field dynamically
        for (const field of userFields) {
            await userData.updateUserField(user_id, field, updates[field]);
        }
    
        return res.redirect(`/${res.locals.user}/portfolio`);
    },
    

    updatePicture: async (req, res) => {
        const {user_id} = req.body;
        if (req.file){
            const bddPath = '/images/' + req.file.filename;
            const updatePicture = await userData.updateUserPicture(bddPath, user_id);
            return res.redirect(`/${res.locals.user}/portfolio`);
        }else {
            return res.redirect(`/${res.locals.user}/portfolio`);
        }
    },

    addNewSkill: async (req, res) => {
        const {skill_name, skill_description, user_username} = req.body
        const addNewSkill = await userData.addUserNewSkill(skill_name, skill_description, user_username);
        return res.redirect(`/${res.locals.user}/portfolio`);
    },

    updateSkill: async (req, res) => {
        const {skill_name, skill_description, user_username, skill_id} = req.body;
        const updateSkill = await userData.updateUserSkill(skill_name, skill_description, user_username, skill_id);
        return res.redirect(`/${res.locals.user}/portfolio`);
    },

    addProject: async (req, res) => {
        
        let project_picture_path;
      
        if (req.file) {
          project_picture_path = '/img/' + req.file.filename;
        } else {
          project_picture_path = '/img/project1.jpg';
        }
      
        const { project_picture, project_user_username, ...projects } = req.body;
      
        await userData.addUserProject(project_picture_path, project_user_username, projects);
      
        return res.redirect(`/${res.locals.user}/portfolio`);
    },
      

    updateProject: async (req, res) => {

        let project_picture_path;

        const { project_picture, project_id, ...projects } = req.body;
        

        if(req.file){

            project_picture_path = '/img/' + req.file.filename;

            const updateProject = await userData.updateUserProjectWithPicture(project_picture_path, project_id, projects);

            return res.redirect(`/${res.locals.user}/portfolio`);
        }else{

            const updateProject = userData.updateUserProjectWithoutPicture(project_id, projects);

            return res.redirect(`/${res.locals.user}/portfolio`);
        }
    },

}

module.exports = user;