import sequelize from '../data-model/data-base';

const Todo = sequelize.model('todo');
const User = sequelize.model('todo_user');

export default async (req,res)=>{

    try {
        const {
            access_token,
            id,
        } = req.body;

        if (!access_token || !id) {
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


        const todos = await Todo.findAll({where:{id}});
        
        if(todos.length == 0){
            res.json({
                success:false,
                errorCode:10005,
                errorMessage:'TodoID无效'
            })
            return
        }

        const todo = todos[0];

        await todo.destroy();

        res.json({
            success:true,
        })

        
    } catch (error) {
        res.json({
            success:false,
            errorCode:10001,
            errorMessage:'系统错误'
        })
    }
    
}