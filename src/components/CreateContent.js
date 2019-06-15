import React, {Component} from 'react';

class CreateContent extends Component {
  render() {
    return (
      <div>
        <article>
          <h2>Create</h2>
          <form action={"/create_process"} method={"post"} onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value,
              e.target.desc.value);
          }.bind(this)}>
            <p><input type={"text"} name={"title"} placeholder={"title"}/></p>
            <p><textarea name={"desc"} placeholder={"desc"}/></p>
            <p><input type={"submit"}/></p>


          </form>
        </article>
      </div>
    );
  }
}

export default CreateContent;
