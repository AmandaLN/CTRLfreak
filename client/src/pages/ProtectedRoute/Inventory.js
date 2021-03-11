/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React, {useEffect, useState } from "react";
import API from "../../utils/API";
import {useLocation} from "react-router-dom";
// import Search from "../../components/Search"
import { List, ListItem } from "../../components/List";
import { UserContext } from "../../utils/UserContext";
import SearchHeader from "../../components/SearchHeader";
import DataTable from "../../components/DataTable";
import ExpenseTable from "../../components/DataBody";
let activeUser;
let budgetInventory = [];
 let typeLocation ;
 let userLocation;


function Inventory() {
  const [budget, setExpenses] = useState([{}]);
  const [filteredBudget, setFilteredBudget] = useState([{}]);
  const [locationPage, setLocation] = useState("");
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
  userLocation = location.user
  typeLocation = location.type


  useEffect(() => {
    setLocation(...locationPage, location.type)
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
      
    }, [typeLocation]);
    // filters the table while you are typing in search
    
    
    function getInventory(typeLocation, username){
      
      API.getInventory(typeLocation, username)
       .then((res) => {
         console.log(res.data, "inventory inventory");
     console.log(res.data[0].expenses.title, "checking expenses title")
     budgetInventory = res.data
     console.log(budgetInventory, "budget inventory")
         setExpenses(...budget, res.data[0].expenses);
         setFilteredBudget(...filteredBudget, res.data[0].expenses);
         console.log(budget, filteredBudget, "trying budget and filtered")
       })
       .catch((err) => console.log(err));
      
      

  }

  function handleSearchChange(event) {
    const filter = event.target.value;
    console.log(filter, "filter")
    const filteredList = budgetInventory.filter((item) => {
      console.log(item, "item")
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    setFilteredBudget({...filteredBudget, filteredList});
  }

  function handleSort() {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }
    function compareFnc(a, b) {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedTable = this.state.filteredTable.sort(compareFnc);
    setFilteredBudget({...filteredBudget, sortedTable });
  }

  return (
    <>
      <div className="container">
        <SearchHeader handleSearchChange={handleSearchChange} user={userLocation} typeLocation={typeLocation} getInventory={getInventory}/>
       <DataTable
            headings={headings}
            users={budgetInventory}
            handleSort={handleSort}
          />
      </div>
    </>
  );
}

export default Inventory;
