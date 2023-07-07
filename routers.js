const express = require('express');
const router = express.Router();

const user = require('./controllers/user');
const upload = require('./middleware/configMulterMiddleware');

router.get('/', user.getIndexPage);

router.post('/user/update', user.updateUser);
router.post('/user/update/picture', upload.single('user_picture'), user.updatePicture);
router.post('/user/add/skill', user.addNewSkill);
router.post('/user/update/skill', user.updateSkill);
router.post('/user/add/project', upload.single('project_picture'), user.addProject);
router.post('/user/update/project', upload.single('project_picture'), user.updateProject);


module.exports = router;

