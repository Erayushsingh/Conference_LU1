import mangoose from 'mongoose';

export const connectDB=async ()=>{
    await mangoose.connect('mongodb+srv://luconference2025:AdminLu1234@luconference.ueslv.mongodb.net/?retryWrites=true&w=majority&appName=luconference')
    .then(console.log("DB Connected"))
}

