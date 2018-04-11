import React, {Component} from 'react';
import '../CSS/Tables.css';

class TableContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      tableData: [],
      tableHeaders: []
    }
  }
  componentWillReceiveProps(nextProps) {

    if(this.props !== nextProps) {
      this.setState({
        tableData: nextProps.tableData,
        tableHeaders: nextProps.tableHeaders
      })
    }
  }
  render() {
    var tableHeaders = this.state.tableHeaders.map((header, index) => {
      return <th className="table-header" key={index}>{header}</th>;
    })

    var tableData = this.state.tableData.map((data, index) => {

      var myStr =  `<tr>
        if!(data.hasOwnProperty('$$typeof')){
          {for(var i = 0; i < data.length; i++) {
            makeRow(data[i], i)
          }}
        }
</tr>`;
return myStr
        function makeRow(tableData, i) {
          return <td className="table-data" key={i}>{tableData}</td>;
        }
    })
    return (
      <div>
        <table className="table-container">
          <tbody>
          <tr>
            {tableHeaders}
          </tr>
          <tr>
            {tableData}
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
