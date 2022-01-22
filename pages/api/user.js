import dbConnect from '@/middleware/dbConnect';
import User from '@/models/user';

// import handler from './hello';

export default async function (req, res) {
    await dbConnect();
    const users = await User.find({});
    res.status(200).json({ message: 'User API', users: users });
}


// import AuthContext from '@/context/AuthContext'