import React, {Component} from 'react';

class Toc extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
      i = i + 1;
    }

    return (
      <div>
        <nav>
          {lists}
        </nav>
      </div>
    );
  }
}

export default Toc;
