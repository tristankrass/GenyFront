import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardTitle, CardText, Spinner, ListGroup, ListGroupItem } from 'reactstrap';
import { RouteComponentProps } from 'react-router';
import PersonDetails from '../components/PersonDetails';
import { IPerson } from '../domain/IPerson';
import { BASE_URL } from '../helpers/constans';


interface IPersonState {
  personList: IPerson[] | null,
  loading: boolean,
  personDetailsOpen: boolean;
  personDetails: IPerson | null;
}

interface IProps {
  personList: IPerson[] | null,
  loading: boolean,
  match: any
  
}


class Persons extends React.Component<IProps, IPersonState> {
  showPersonDetails(personId: string) : void{
    fetch(BASE_URL + personId)
    .then(res => res.json())
    .then(data => {
      
      this.setState({ 
        personDetailsOpen: true,
        personDetails: data
      })
      
    })
  }

  constructor(props : IProps) {
    super(props);
    this.state = {
      personList: [],
      loading: true,
      personDetailsOpen: false,
      personDetails: null
    };
    
    this.toggleModal = this.toggleModal.bind(this);

  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      this.setState({ personList: data, loading: false }) 
    })
  }

  toggleModal(){  
    this.setState({ 
      personDetailsOpen: !this.state.personDetailsOpen
    })
  }


  render(){

    return(
      <div>
       <div className="row">
         
        {
          this.state.loading ? 
          <div className="text-center">
            <Spinner color="primary" size="lg" />
          </div>
          :

          this.state.personList!.map(person => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={person.id}>
              <Card className="m-3" body>
              <CardTitle>{person.firstName} {person.lastName}</CardTitle>
                <CardText>
                    <ListGroup>
                      <ListGroupItem>MiddleName: {person.middleName}</ListGroupItem>
                      <ListGroupItem>Birth of date: {person.dateOfBirth}</ListGroupItem>
                      <ListGroupItem>Sex: {person.sex === 0 ? "Unknown": (person.sex === 1 ? "Female" : "Male")}</ListGroupItem>
                    </ListGroup>
                  </CardText>
                <Button onClick={() => this.showPersonDetails(person.id)}>
                  Details about {person.firstName}
                </Button>
              </Card>
            </div>
          ))
        }
        {
          this.state.personDetailsOpen ?
          ( 
          <PersonDetails open={true} modalstate={this.toggleModal} person={this.state.personDetails!}>
          </PersonDetails>
          ) : <></>
        }
        </div>
      </div>
    )
  }
}
 

export default connect()(Persons);
