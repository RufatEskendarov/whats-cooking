// const router = require('express').Router();
// const { Cuisine } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const cuisineData = await Cuisine.findAll({
//         });
//         res.status(200).json(cuisineData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.post('/', async (req, res) => {
//     try {
//         const newCuisine = await Cuisine.create(req.body);
//         res.status(200).json(newCuisine);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const deleteCuisine = await Cuisine.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (!deleteCuisine) {
//             res.status(404).json({ message: 'No cuisine type found with this id! '});
//             return;
//         }

//         res.status(200).json(deleteCuisine);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;