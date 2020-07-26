import React,{useEffect,useRef} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Edit from './Edit';
import Delete from './Delete';



function Instructor (props) {

    const { newClass } = props

    return (
        <div>
            <Card variant='outlined' > 
            <CardHeader
            title={newClass.title}
            subheader={newClass.location}/>
            <CardContent>
                <Typography variant='body1' component='p'>
                {newClass.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {newClass.description}
                </Typography>
                <div className="adminTools">
                <Edit newClaass={newClass}/>
                <Delete newClass={newClass}/>
                </div>   
            </CardContent>
           </Card>
            
        </div>
    )

}

export default Instructor