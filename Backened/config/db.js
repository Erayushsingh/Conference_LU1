import mangoose from 'mongoose';

export const connectDB=async ()=>{
    await mangoose.connect('mongodb+srv://luconference:luconference2024@luconference2024.wb0nn.mongodb.net/?retryWrites=true&w=majority&appName=luconference2024')
    .then(console.log("DB Connected"))
}

