const client = require('../client');

const portfolioData = {

    getPorfolioData: async (username) => {
        const query = `
        SELECT
            "user".*,
            COALESCE(to_json(skills), '[]'::json) AS skills,
            COALESCE(to_json(projects), '[]'::json) AS projects
        FROM
            "user"
        LEFT JOIN (
            SELECT
                skill_user_username,
                json_agg(
                    json_build_object(
                        'skill_id', skill_id,
                        'skill_name', skill_name,
                        'skill_description', skill_description,
                        'skill_user_username', skill_user_username,
                        'skill_created_at', skill_created_at,
                        'skill_updated_at', skill_updated_at
                    )
                ) AS skills
            FROM
                "skill"
            WHERE
                "skill"."skill_user_username" = $1
            GROUP BY
                "skill"."skill_user_username"  
        ) AS skill_agg ON "user"."user_username" = skill_agg.skill_user_username
        LEFT JOIN (
            SELECT
                project_user_username,
                json_agg(
                    json_build_object(
                        'project_id', project_id,
                        'project_name', project_name,
                        'project_description', project_description,
                        'project_picture', project_picture,
                        'project_video', project_video,
                        'project_sound', project_sound,
                        'project_link', project_link,
                        'project_user_username', project_user_username,
                        'project_created_at', project_created_at,
                        'project_updated_at', project_updated_at
                    )
                ) AS projects
            FROM
                "project"
            WHERE
                "project"."project_user_username" = $1
            GROUP BY
                "project"."project_user_username"
        ) AS project_agg ON "user"."user_username" = project_agg.project_user_username
        WHERE
            "user"."user_username" = $1;

        `
        const values = [username];
        const result = await client.query(query, values);
        return result.rows[0];
    }
}

module.exports = portfolioData;