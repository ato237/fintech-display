import React from 'react'
import faker from 'faker'
import './table.css'
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import{ Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead ,
 TableRow ,
 Typography,
 TableSortLabel,
 Checkbox,
 TablePagination,
 Toolbar,
 Tooltip,
 IconButton,
 Paper} from '@material-ui/core';
import { borderRadius, maxWidth } from '@material-ui/system';
import { blueGrey } from '@material-ui/core/colors';

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
        textAlign:'center',
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
        
    },
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  }));

  const headCells = [
    {
      id: "id",
      numeric: true, 
      label: "No"
    },
    { id: "date", 
    label: "DATE"
   },
      { id: "title", 
    label: "TITLE"
   },
      { id: "user", 
    label: "USER"
    },  
    { id: "mode", 
    label: "MODE"
    },
    { id: "duration", 
    label: "DURATION"
    },
    { id: "results", 
    label: "RESULTS"
    },



  ];
  

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }


const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: blueGrey
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          FRMAACCOUNTINGREPORTS
        </Typography>
      )}

{numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            className = {classes.tableHeaderCell}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

function TableReal(props) {

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = USERS.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, USERS.length - page * rowsPerPage);

    const classes = useStyles()
    return (
        <>
            <EnhancedTableToolbar numSelected={selected.length} />
           <TableContainer component={Paper} className = {classes.tableContainer}> 
      <Table className={classes.table} aria-label="simple table">
      <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={USERS.length}
            />
        <TableBody>
        {stableSort(USERS, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);

return (
            <TableRow
             hover
            onClick={event => handleClick(event, row.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={45}
            selected={isItemSelected}>
              <TableCell  padding="checkbox" ><Checkbox checked={isItemSelected} /></TableCell>
              <TableCell>{row.id}</TableCell>
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
            )
        })}
        {emptyRows > 0 && (
                <TableRow>
                  <TableCell />
                </TableRow>
              )}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={USERS.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </TableContainer> 

    </>
    )
}




export default TableReal
