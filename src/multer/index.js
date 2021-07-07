import multer from 'multer'

const storage = multer.diskStorage({
    destination : function (req,file,cb)
    {
       
        cb(null,'./src/assets/imgs')
    },
    filename: function (req,file,cb)
    {   

        cb(null, `${file.originalname}`)
    }
})

const upload = multer({storage})

module.exports = upload