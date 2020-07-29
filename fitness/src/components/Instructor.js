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
            title={newClass.name}
            subheader={newClass.type}/>
            <CardContent>
                <Typography variant='body1' component='p'>
                {newClass.start_time}
                </Typography>
                <Typography variant='body1' component='p'>
                {newClass.duration}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {newClass.intensity_level}
                </Typography>
                <Typography variant='body3' component='p'>
                {newClass.address}
                </Typography>
                <Typography variant='body3' component='p'>
                {newClass.city}, {newClass.postal}
                </Typography>
                <Typography variant='body1' component='p'>
                {newClass.current_attendees}
                </Typography>
                <Typography variant='body1' component='p'>
                {newClass.max_class}
                </Typography>
                <div className="instrucorAddClass">
                <Edit newClaass={newClass}/>
                <Delete newClass={newClass}/>
                </div>   
            </CardContent>
           </Card>
            
        </div>
    )

}

export default Instructor