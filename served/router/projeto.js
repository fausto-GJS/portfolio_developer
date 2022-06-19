const router = require('express').Router()
const { Error } = require('mongoose')
const Projeto = require('../model/Projeto')

//////////////////////////////////////////////////////CREATE     ESCREVE NO BANCO DE DADOS
router.post('/', async (req, res) => {
    const projeto = new Projeto({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const saveProjeto = await projeto.save()
        res.json({
            success: true,
            data: saveProjeto
        })
    } catch {
        (err) => {
            res.json({
                success: false,
                message: err
            })
        }
    }
})
//////////////////////////////////////////////////////READ  - LÊ BANCO DE DADOS
router.get('/', async (req, res) => {
    try {
        const lerProjeto = await Projeto.find()
        res.json({
            success: true,
            data: lerProjeto
        })
    } catch {
        (err) => {
            res.json({
                success: false,
                message: err
            })
        }
    }
})
////////////////////////////////////////////
router.get('/:slug', async (req, res) => {
    try {
        const lerProjeto = await Projeto.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: lerProjeto
        })
    } catch {
        (err) => {
            res.json({
                success: false,
                message: err
            })
        }
    }
})
//////////////////////////////////////////////////////UPDATE    ATUALIZA O BANCO DE DADOS
router.patch('/:slug', async (req, res) => {
    try {
        const atualizaProjeto = await Projeto.updateOne({
            slug: req.params.slug
        },
            {
                $set:
                {
                    title: req.body.title,
                    description: req.body.description
                }
            })
        res.json({
            success: true,
            updated: atualizaProjeto.modifiedCount
        })
    } catch {
        (err) => {
            res.json({
                success: false,
                message: err
            })
        }
    }
})
//////////////////////////////////////////////////////DELETE    DELETANDO O BANCO DE DADOS
router.delete('/:slug', async (req, res) => {
    try {
        const deleteProjeto = await Projeto.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: deleteProjeto.deletedCount
        })
    } catch {
        (err) => {
            res.json({
                success: false,
                message: Error
            })
        }
    }
})

module.exports = router