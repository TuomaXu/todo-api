import sequelize from '../data-model/data-base';

const Todo = sequelize.model('todo');
const User = sequelize.model('todo_user');

export default async (req,res)=>{

    try {
        const {
            access_token,
            title,
            content,
        } = req.body;

        if (!access_token || !title || !content) {
            res.json({
                success:false,
                errorCode:10006,
                errorMessage:'参数无效'
            })

            return;
        }

        const users = await User.findAll({where:{access_token}});

        if(users.length == 0){
            res.json({
                success:false,
                errorCode:10004,
                errorMessage:'access_token无效'
            })

            return
        }

        const user = users[0];

        const todo = await Todo.create({
            title,
            content,
            isFinish:false
        });

        await user.addTodo(todo);

        res.json({
            success:true,
            data:todo
        })

        
    } catch (error) {
        res.json({
            success:false,
            errorCode:10001,
            errorMessage:'系统错误'
        })
    }
    
}