import express from 'express';
const router = express.Router();
import transformationRoutes from './transformation';

router.use(transformationRoutes);
router.get('/', function(req, res) {
  res.json(getHealth());
});

router.get('/health', function(req, res) {
  res.json(getHealth());
  res.end();
});

function getHealth() {
  return {
    ok: true,
    message: 'Healthy'
  };
}

export default router;