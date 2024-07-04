import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { FilterModel } from "../models/filter.model.js";
import { sample_filters } from "../data.js";
import { sample_users } from "../data.js";
import bcrypt from "bcryptjs";
const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery',true)

export const dbconnect = async () => {
    try {
        connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUser();
        await seedFilters();
        console.log('connect successfully---');
    } catch (error) {
        console.log(error)
    }
};

async function seedUser() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
        console.log('User seed is already done!');
        return;
    }

    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user)
    }

    console.log('User seed is done');
}

async function seedFilters() {
    const filters = await FilterModel.countDocuments();
    if (filters > 0) {
        console.log('Filters seed is already done!');
    return;
    } 
    
    for (const filter of sample_filters) {
        filter.imageUrl = `/filters/${filter.imageUrl}`;
        await FilterModel.create(filter);
    }

    console.log('Filters seed is done!')
}