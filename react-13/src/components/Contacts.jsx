import React from "react";
import Contact from "./Contact";
import axios from 'axios'

class Contacts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			lista_consulta: [],
			search: "",
		};
	}
	filter(filter){
		let data;
		if(filter === "name"){
			data = this.state.data.filter((contact) => contact.name.includes(this.props.search))
		}else if(filter === "country"){
			data = this.state.data.filter((contact) => contact.country.includes(this.props.search))
		}else if(filter === "company"){
			data = this.state.data.filter((contact) => contact.company.includes(this.props.search))
		}else if(filter === "department"){
			data = this.state.data.filter((contact) => contact.department.includes(this.props.search))
		}else if(filter === "admissionDate"){
			data = this.state.data.filter((contact) => contact.admissionDate.includes(this.props.search))
		}
		return data
	}
	async getData(){
		const res = await axios.get("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
		console.log("get data sendo chamado...")
		this.setState({data: res.data,lista_consulta: res.data})
	}
	async componentDidMount(){
		await this.getData();
	}
	async componentDidUpdate (){
		if(this.props.search !== "" && this.state.search !== this.props.search){
			let data = this.filter(this.props.filter);
			this.setState({lista_consulta: data, search: this.props.search})
		}else if(this.props.search === "" && this.state.data.length >this.state.lista_consulta.length){
			console.log(this.props.search);
			this.setState({lista_consulta: this.state.data})
		}
	}
	render(props) {
		return (
			<section className="container" data-testid="contacts">
				<ul>
					{
						this.state.data.length !== 0 ? this.state.lista_consulta.map(contact => (
							<Contact dep={contact.department} company={contact.company} adm={contact.admissionDate} country={contact.country} tel={contact.phone} name={contact.name} image={contact.avatar} key={contact.id}/>
						))
						: null
					}
				</ul>
			</section>
		);
	}
}

export default Contacts;
