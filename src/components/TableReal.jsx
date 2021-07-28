import React from 'react'
import faker from 'faker'
import './table.css'
import { makeStyles } from '@material-ui/core/styles';
import{ Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead ,
 TableRow ,
 Typography,
 TableSortLabel,
 Paper} from '@material-ui/core';
import { borderRadius, maxWidth } from '@material-ui/system';

let max = 20
let USERS = [], RESULT = ['Success', 'Failure'],
 TYPE = ['RECONCILATION','COMPTABILISATION'],
 MODE =['Automatique', 'Mannuel'],
 TITLE =['Reconcilation des Transaction', 'Compatabilsation des Transaction'];
for(let i=0;i<max;i++){
    USERS[i] = {
        id: parseInt(Math.random() * 20),
        date: faker.date.past().toLocaleDateString('en-US'),
        Type: TYPE[Math.floor(Math.random() * TYPE.length)],
        Title: TITLE[Math.floor(Math.random() * TITLE.length)],
        User: faker.name.findName(),
        mode: MODE[Math.floor(Math.random() * MODE.length)],
        duration: parseInt(Math.random() * 3),
        result: RESULT[Math.floor(Math.random() * RESULT.length)]
    }
}

const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#06c23e',
        color:theme.palette.getContrastText(theme.palette.primary.dark)

    },
    status:{
        fontWeight:'bold',
        fontSize: '0.75rem',
        color:'white',
        backgroundColor:'grey',
        borderRadius:'8px',
        padding: '3px 10px',
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
  }));


function TableReal(props) {
    const classes = useStyles()
    return (
        <>
    
           <TableContainer component={Paper} className = {classes.tableContainer}> 
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className={classes.tableHeaderCell }><TableSortLabel 
            keys="name"
            active={"name" === "name"}
            direction="asc"
            //onClick={createSortHandler("name")}
            >No</TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableHeaderCell } >DATE</TableCell>
            <TableCell className={classes.tableHeaderCell }>TITLE</TableCell>
            <TableCell className={classes.tableHeaderCell }>USER</TableCell>
            <TableCell className={classes.tableHeaderCell } >MODE</TableCell>
            <TableCell className={classes.tableHeaderCell }>DURATION</TableCell>
            <TableCell className={classes.tableHeaderCell }>RESULT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.map((row) => (
            <TableRow key={row.name}>
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.Type}</TableCell>
              <TableCell >{row.User}</TableCell>
              <TableCell >{row.mode}</TableCell>
              <TableCell >{row.duration} sec</TableCell>
              <TableCell >
                  <Typography
                  className = {classes.status}
                  style={{
                      backgroundColor:
                      ((row.result === 'Success' && 'green') || 
                      (row.result === 'Failure' && 'red'))
                  }

                  }>{row.result}</Typography>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </>
    )
}

export default TableReal
