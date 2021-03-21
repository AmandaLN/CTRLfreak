/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React, {useEffect, useState , useContext} from "react";
import API from "../../utils/API";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
// import Search from "../../components/Search"
import { List, ListItem } from "../../components/List";
import { UserContext } from "../../utils/UserContext";
import SearchHeader from "../../components/SearchHeader";
import DataTable from "../../components/DataTable";
import ExpenseTable from "../../components/DataBody";
let activeUser;
let budgetInventory = [];
let filterBudget = []
 let typeLocation ="";
 let userLocation;


function Inventory() {
  const [user, dispatch] = useContext(UserContext);
  const [budget, setExpenses] = useState([{}]);
  const [filteredBudget, setFilteredBudget] = useState([{}]);
  const [locationPage, setLocation] = useState("");
  const [order, setOrder] = useState("ascend");
  // const [typeLocation, setType] = useState();
  // const { user } = useContext(UserContext);

  const headings = [
    { name: "Title", width: "10%" },
    { name: "Quantity", width: "10%" },
    { name: "Expires/DueDate", width: "20%" },
    { name: "Cost", width: "20%" },
    { name: "Type", width: "10%" },
  ];

  console.log("inventory load");
  let location = useLocation();
 
  console.log(location);


  const buttonStyle = {
    marginRight: 10
  };
  useEffect(() => {
   
    userLocation = location.user
    typeLocation = location.type
    setLocation(...locationPage, typeLocation)
    // fetch("api/users/user", {
    //   credentials: "include",
    // })
    //   .then((res) => {
    //     console.log(res, " inventory");
    //     return res.json(res);
    //   })
    //   .then((data) => {
    //     activeUser = data.username;
    //     console.log(data, "protected route index");
    //     console.log(activeUser, "testing budget username");
    //     getTypeInventory(data.username);
    //   })
    //   .catch((err) => {
    //     console.log("Error fetching authorized user.");
    //   });
       console.log("location page")
      // setType(location.type)
    console.log(typeLocation, "location type")
      let username = {
        user: userLocation,
      };
      
      getInventory(typeLocation, username)
      // getTypeInventory(userLocation);
      
    }, [locationPage, filterBudget]);
    // filters the table while you are typing in search
    
    
    function getInventory(typeLocation, username){
      
      API.getInventory(typeLocation, username)
       .then((res) => {
         console.log(res.data, "inventory inventory");
     console.log(res.data[0].expenses.title, "checking expenses title")
     budgetInventory = res.data
     filterBudget = res.data
     console.log(budgetInventory, "budget inventory")
         setExpenses(...budget, res.data.expenses);
         setFilteredBudget(...filteredBudget, res.data.expenses);
         console.log(budget, filteredBudget, "trying budget and filtered")
       })
       .catch((err) => console.log(err));
     
  }

  function deleteBudget(id, username) {
   
    API.deleteBudget(id, username)
      .then(res => getInventory(typeLocation, username))
      .catch(err => console.log(err));
  }

  function handleSearchChange(event) {
    const filter = event.target.value;
    console.log(filter, "filter")
    console.log(budgetInventory, "filter inventory")
    const filteredList = budgetInventory.filter((item) => {
      console.log(item, "item")
      let values = Object.values(item.expenses).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    filterBudget = filteredList
    setFilteredBudget({...filteredBudget, filteredList});
  }

  function handleSort() {
    if (order === "descend") {
      setOrder({
        order: "ascend",
      });
    } else {
      setOrder({
        order: "descend",
      });
    }
    function compareFnc(a, b) {
      if (order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "title") {
          return a[heading].localeCompare(b[heading]);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "title") {
          return b[heading].localeCompare(a[heading]);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedTable = filterBudget.sort(compareFnc);
    filterBudget = sortedTable
    setFilteredBudget({...filteredBudget, sortedTable });
  }

  return (
    <>
      <div className="container text-center">
       <SearchHeader handleSearchChange={handleSearchChange} user={userLocation} typeLocation={typeLocation} getInventory={getInventory}/>
       <DataTable
            headings={headings}
            filterBudget={filterBudget}
            handleSort={handleSort}
            deleteBudget={deleteBudget}
          />
      </div>
    </>
  );
}

export default Inventory;
