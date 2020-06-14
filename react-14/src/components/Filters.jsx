import React from 'react';

class Filters extends React.Component {
	state = {
		active1: true,
		active2: false,
		active3: false,
		active4: false,
		active5: false,

	}
	handleChange = event => {
		this.props.getSearch(event);
	}
	Switch1 = () => {
		this.setState((state)=> {return {active1 : !state.active1,active2:false,active3:false,active4:false,active5:false}});
		this.props.getFilter("name");
	};
	Switch2 = () => {
		this.setState((state)=> {return {active1:false,active2 : !state.active2,active3:false,active4:false,active5:false}});
		this.props.getFilter("country");
	};
	Switch3 = () => {
		this.setState((state)=> {return {active1:false,active2:false,active5:false,active4:false,active3 : !state.active3}});
		this.props.getFilter("company");
	};
	Switch4 = () => {
		this.setState((state)=> {return {active1:false,active2:false,active3:false,active5:false,active4 : !state.active4}});
		this.props.getFilter("department");
	};
	Switch5 = () => {
		this.setState((state)=> {return {active1:false,active2:false,active3:false,active4:false,active5 : !state.active5}});
		this.props.getFilter("admissionDate");
	};
	render() {
		const {active1,active2,active3,active4,active5} = this.state;

		return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar"  onChange={this.handleChange}/>
	
					<button className="filters__search__icon">
					<i className="fa fa-search"/>
					</button>
				</div>
	
				<button className={`${active1 ? "filters__item is-selected" : "filters__item"}`} onClick={this.Switch1}>
					Nome <i className="fas fa-sort-down" />
				</button>
	
				<button className={`${active2 ? "filters__item is-selected" : "filters__item"}`} onClick={this.Switch2}>
					País <i className="fas fa-sort-down" />
				</button>
	
				<button className={`${active3 ? "filters__item is-selected" : "filters__item"}`} onClick={this.Switch3}>
					Empresa <i className="fas fa-sort-down" />
				</button>
	
				<button className={`${active4 ? "filters__item is-selected" : "filters__item"}`} onClick={this.Switch4}>
					Departamento <i className="fas fa-sort-down" />
				</button>
	
				<button className={`${active5 ? "filters__item is-selected" : "filters__item"}`} onClick={this.Switch5}>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>

			);
	}
}

export default Filters;
