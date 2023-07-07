const client = require('../client');

const user = {
    
    updateUserField: async (user_id, field, value) => {
        const query = `
          UPDATE "user"
          SET "${field}" = $1
          WHERE "user_id" = $2
        `;
        const values = [value, user_id];
    
        const result = await client.query(query, values);
      },

    updateUserPicture: async (bddPath, user_id) => {

        const query = `
            UPDATE "user" 
            SET user_picture = $1
            WHERE user_id = $2;
        `;

        const values = [
            bddPath,
            user_id
        ];

        const update = await client.query(query, values);
    },

    addUserNewSkill: async (skill_name, skill_description, user_username) => {

        const query = `
            INSERT INTO skill(
                skill_name,
                skill_description,
                skill_user_username
            )VALUES(
                $1,
                $2,
                $3
            )
        `;

        const values = [
            skill_name,
            skill_description,
            user_username
        ];

        const addSkill = await client.query(query, values);

    },

    updateUserSkill: async (skill_name, skill_description, user_username, skill_id) => {

        const query = `
            UPDATE skill 
            SET skill_name = $1, skill_description = $2, skill_user_username = $3
            WHERE skill_id = $4;
        `;

        const values = [
            skill_name,
            skill_description,
            user_username,
            skill_id
        ];

        const update = await client.query(query, values);
    },

    addUserProject: async (project_picture_path, project_user_username, project) => {
        const query = `
          INSERT INTO project(
            project_picture,
            project_user_username,
            ${Object.keys(project).join(', ')}
          )
          VALUES (
            $1,
            $2,
            ${Object.keys(project).map((_, index) => `$${index + 3}`).join(', ')}
          )
        `;
      
        const values = [project_picture_path, project_user_username, ...Object.values(project)];
      
        const addProject = await client.query(query, values);
      },
      

    updateUserProjectWithPicture: async (project_picture_path, project_id, updates) => {
        const fields = Object.keys(updates);
        const placeholders = fields.map((field, index) => `${field} = $${index + 3}`).join(', ');
    
        const query = `
            UPDATE project 
            SET project_picture = $1, ${placeholders}
            WHERE project_id = $2;
        `;
    
        const values = [project_picture_path, project_id, ...Object.values(updates)];
    
        const update = await client.query(query, values);
    },
    

    updateUserProjectWithoutPicture: async (project_id, projects) => {
        const fields = Object.keys(projects);
        const placeholders = fields.map((field, index) => `${field} = $${index + 2}`).join(', ');
    
        const query = `
            UPDATE project 
            SET ${placeholders}
            WHERE project_id = $1;
        `;
    
        const values = [project_id, ...Object.values(projects)];
    
        const update = await client.query(query, values);
    },

}

module.exports = user;