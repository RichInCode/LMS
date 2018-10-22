import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button } from "reactstrap";



function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var csrftoken = readCookie('csrftoken');

class EditTable extends React.Component {
  constructor( {data} ) {
    super();
    this.state = {data};
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  handlePageChange() {
    return (console.log('here'));
  }
  render() {
    const { data } = this.state;
    return (
      <div className='container' style={{backgroundColor: "white", borderRadius: "10px"}}>
        <ReactTable
            getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {
                    console.log("A Td Element was clicked!");
                    console.log("it produced this event:", e);
                    console.log("It was in this column:", column);
                    console.log("It was in this row:", rowInfo);
                    console.log("It was in this table instance:", instance);

                    var target_url = '/api/lead/'.concat(rowInfo.original.id);
                    var target_request = JSON.stringify(rowInfo.original);

                    window.alert = function() {};

                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                         if (this.readyState == 4 && this.status == 200) {
                             alert(this.responseText);
                         }
                    };
                    xhttp.open("PUT", target_url, false);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
                    xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    xhttp.send(target_request);

                    // IMPORTANT! React-Table uses onClick internally to trigger
                    // events like expanding SubComponents and pivots.
                    // By default a custom 'onClick' handler will override this functionality.
                    // If you want to fire the original onClick handler, call the
                    // 'handleOriginal' function.
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  }
                };
            }}
          data={data}
          columns={[
            {
              Header: "ID",
              accessor: "id",
            },
            {
              Header: "Name",
              accessor: "name",
              Cell: this.renderEditable
            },
            {
              Header: "Email",
              accessor: "email",
              Cell: this.renderEditable
            },
            {
              Header: "Phone",
              accessor: "phone",
              Cell: this.renderEditable
            },
            {
              Header: "Title",
              accessor: "title",
              Cell: this.renderEditable
            },
            {
              Header: "City",
              accessor: "city",
              Cell: this.renderEditable
            },
            {
              Header: "State",
              accessor: "state",
              Cell: this.renderEditable
            },
            {
              Header: "Country",
              accessor: "country",
              Cell: this.renderEditable
            },
            {
              Header: "Message",
              accessor: "message",
              Cell: this.renderEditable
            }
          ]}
          defaultPageSize={10}
          onPageChange={this.handlePageChange}
          className="-striped -highlight"
        />
        <br />
        <section className="buttonsec2">
            <Button className="mybutton" href='/'>
              Back Home
            </Button>
            <Button className="mybutton" href="/lead/view">
              View Leads
            </Button>
       </section>
      </div>
    );
  }
}

export default EditTable;
