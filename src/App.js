import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class FilterableProductTable extends Component {
	constructor(props){
		super(props);
		this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
		this.handleIsStockedChange = this.handleIsStockedChange.bind(this);
		this.state = {words: "", isStocked: true};
		
	}
	
	handleSearchBarChange(newWords){
		this.setState({words: newWords});
	}

	handleIsStockedChange(isStockedOrNot){
		console.log("FilterableProductTable.handleIsStockedChange called - isStockedOrNot: " + isStockedOrNot);
		this.setState({isStocked: isStockedOrNot});
	}	
	
  render() {
    return (
      <div>
	  	<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
		<h2>A Project for Docker tutorial</h2>
    	</div>
      </div>
    );
  }
}

class SearchBar extends Component {
	constructor(props){
		super(props);		
		this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
		this.handleIsStockedChange = this.handleIsStockedChange.bind(this);
	}
	
	handleSearchBarChange(e){
		this.props.handleSearchBarChange(e.target.value);
	}
	
	handleIsStockedChange(e){
		this.props.handleIsStockedChange(e.target.checked);
	}
		
	render(){
		return (
			<div>
				<input type="text" value={this.props.words} onChange={this.handleSearchBarChange} />
				<br/>
				<input type="checkbox" defaultChecked={this.props.isStocked} onChange={this.handleIsStockedChange} />
				Only show products in stock 
			</div>
		);
	}
}

class ProductTable extends Component {
	render(){
		
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
					<ProductCategoryRow name="Sporting Goods"/>
					<ProductRow name="Football" price="$49.99" stocked={true} words={this.props.words} showOnlyStocked={this.props.isStocked} />
					<ProductRow name="Baseball" price="$49.99" stocked={true} words={this.props.words} showOnlyStocked={this.props.isStocked} />
					<ProductRow name="Bastekball" price="$49.99" stocked={false} words={this.props.words} showOnlyStocked={this.props.isStocked} />
					<ProductCategoryRow name="Electronics"/>
					<ProductRow name="iPod Touch" price="$49.99" stocked={true} words={this.props.words} showOnlyStocked={this.props.isStocked} />
					<ProductRow name="iPhone 5" price="$49.99" stocked={false} words={this.props.words} showOnlyStocked={this.props.isStocked} />
					<ProductRow name="Nexus 7" price="$49.99" stocked={true} words={this.props.words} showOnlyStocked={this.props.isStocked} />
				</tbody>	
			</table>
		)
	}
}

class ProductCategoryRow extends Component {
	render(){
		return (
			<tr>
				<td>{this.props.name}</td>
			</tr>
		);
	}
}

class ProductRow extends Component {

	render(){
		if (!this.props.name.includes(this.props.words)){
			return null;
		}
		if (this.props.showOnlyStocked) {
			if (!this.props.stocked){
				return null;
			}
		}
		
		
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
}



export default FilterableProductTable;
