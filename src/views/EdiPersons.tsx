import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState, FormEvent } from 'react';
import { BASE_URL } from '../helpers/constans';
import { stat } from 'fs';
import { IPerson } from '../domain/IPerson';

interface IState {
  person: IPerson | null;
  loading: boolean;
}

interface IProps {
  personList: IPerson[] | null,
  loading: boolean,
  location: any,
  history: any
}

class EdiPersons extends React.Component<IProps, IState>  {


 
  constructor(props: IProps) {
    super(props);
    this.state = {
      person: null,
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const personId = (this.props.location.pathname.split("/")[2]);

    fetch(BASE_URL + personId)
      .then(res => res.json())
      .then(data => {
        this.setState({ person: data, loading: false });
      })
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    
    // TODO: Creating the post before redirecting.
    this.props.history.push('/');

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >

          <div className="form-group">
            <label className="control-label" htmlFor="FirstName">FirstName</label>
            <input className="form-control" type="text" 
              data-val="true" data-val-maxlength-max="128" data-val-minlength-min="1" id="FirstName" name="FirstName" />
            <span className="text-danger field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
          </div>

          <div className="form-group">
            <label className="control-label" htmlFor="LastName">LastName</label>
            <input className="form-control" type="text" data-val="true" data-val-maxlength-max="128"
              data-val-minlength-min="1" data-val-required="The LastName field is required." id="LastName" name="LastName"  />
            <span className="text-danger field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
          </div>

          <div className="form-group">
            <label className="control-label" htmlFor="DateOfBirth">DateOfBirth</label>
            <input
              className="form-control"
              type="date" id="DateOfBirth" name="DateOfBirth"
              />

            <span className="text-danger field-validation-valid" data-valmsg-for="DateOfBirth" data-valmsg-replace="true"></span>
          </div>

          <div className="form-group">
            <label className="control-label" htmlFor="PlaceOfBirth">PlaceOfBirth</label>
            <input className="form-control" type="text" id="PlaceOfBirth" name="PlaceOfBirth" value="" />
            <span className="text-danger field-validation-valid" data-valmsg-for="PlaceOfBirth" data-valmsg-replace="true"></span>
          </div>


          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div >
    );
  }
}
export default connect()(EdiPersons);