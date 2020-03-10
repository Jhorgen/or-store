import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, Row, Col } from 'reactstrap'
import Footer from './Footer'
import {ScrollToTopOnMount} from './ScrollFix'


class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount = () => {
    let description = this.props.location.state.searchInput;
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?description=${description}`)
    .then(res => res.json())
    .then(
      data => {this.setState({results: data})
      console.log(data)}
    )
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('fired');
    if(this.props.location.state.search === 'search') {
      console.log('fired 2');
      console.log(nextProps);
      let description = this.props.location.state.searchInput;
      fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?description=${description}`)
      .then(res => res.json())
      .then(
        data => {this.setState({results: data})
        this.nextSearch()}
      )
    } else {
      console.log(this.props.location.state);
      console.log('search input', this.props.location.state.searchInput);
    }
  }

  nextSearch = () => {
    this.setState({results: []})
    let description = this.props.location.state.searchInput;
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?description=${description}`)
    .then(res => res.json())
    .then(
      data => {this.setState({results: data})
      console.log(data)}
    )
  }

  render() {
    let footer = this.state.results.length ? <Footer/> : ''
    let searchResult = this.state.results.length ?
    (
      this.state.results.map(searchResult => {
        return (
          <div key={searchResult.id}>
            <ScrollToTopOnMount/>
            <Link style={{color: 'black'}} to={searchResult.brand + '/' + searchResult.title.split(' ').join('')}>
            <Row className="align-items-center text-center justify-content-center" style={{margin: '0px'}}>
              <Col sm='2' xs='6'>
                <span className="title" style={{fontSize: '1.2rem'}}><b className='text-dark'>{searchResult.brand}</b> {searchResult.title} <span className='text-dark'>{searchResult.selectedoption}</span></span>
              </Col>
              <Col sm='2' xs='6'>
                  <img style={{height: "6.5rem"}} src={ require(`./../images/${searchResult.image1}.jpg`)} alt={searchResult.image}/>
              </Col>
            </Row>
          </Link>
            <hr style={{width: '50%'}} />
          </div>
        )
      })
    )
    :
    (
      <div className='text-center mt-2 mb-5'>
      <Spinner color="info" />
      </div>
    )


    return (
      <div className='footer-control'>
        <div>
          <h4 className='text-center mt-2 mb-4'>Results</h4>
      {searchResult}
    </div>
      {footer}
      </div>
    )
  }
}


export default SearchResults;
