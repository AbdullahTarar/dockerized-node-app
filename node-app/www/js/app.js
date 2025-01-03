var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var SearchBar = React.createClass({
    searchHandler: function() {
        this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
    },
    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this.searchHandler} value={this.props.searchKey}/>
            </div>

        );
    }
});


var EmployeeListItem = React.createClass({
    render: function () {
        return (
            <li
                className="employee-card"
                style={{
                    listStyleType: 'none',
                    margin: '10px',
                    padding: '20px',
                    border: '1px solid #444',
                    borderRadius: '8px',
                    backgroundColor: '#222',
                    textAlign: 'center',
                    color: '#fff',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                <a
                    href={"#employees/" + this.props.employee.id}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <img
                        className="media-object"
                        src={
                            "pics/" +
                            this.props.employee.firstName +
                            "_" +
                            this.props.employee.lastName +
                            ".jpg"
                        }
                        alt={this.props.employee.firstName + " " + this.props.employee.lastName}
                        style={{
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            marginBottom: '10px',
                        }}
                    />
                    <h2
                        style={{
                            margin: '10px 0 5px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#0ff',
                        }}
                    >
                        {this.props.employee.firstName} {this.props.employee.lastName}
                    </h2>
                    <p
                        style={{
                            margin: '0',
                            fontSize: '14px',
                            color: '#ccc',
                        }}
                    >
                        {this.props.employee.title}
                    </p>
                </a>
            </li>
        );
    }
});


var EmployeeList = React.createClass({
    render: function () {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

// var HomePage = React.createClass({
//     render: function () {
//         return (
//             <div className={"page " + this.props.position} style={{backgroundColor: '#333', color: '#0ff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%',}}>
//                 <div className="content">
//                     <h1 className="text-center">Employee Directory</h1>
//                     <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler} style={{width: '100%', padding: '10px', fontSize: '16px'}}  />
//                     {/* <EmployeeList employees={this.props.employees} /> */}
//                     <div style={{marginTop: '20px', maxHeight: '500px', overflowY: 'auto'}}>
//                         <EmployeeList employees={this.props.employees} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });
var HomePage = React.createClass({
    render: function () {
        return (
            <div
                className={"page " + this.props.position}
                style={{
                    backgroundColor: '#333',
                    color: '#0ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                    padding: '20px',
                }}
            >
                <div
                    className="content"
                    style={{
                        backgroundColor: '#222',
                        padding: '30px',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <h1
                        className="text-center"
                        style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            color: '#0ff',
                            textShadow: '0px 2px 4px rgba(0, 255, 255, 0.5)',
                        }}
                    >
                        Employee Directory
                    </h1>
                    <p
                        style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            color: '#ccc',
                        }}
                    >
                        Easily find and connect with your colleagues.
                    </p>
                    <SearchBar
                        searchKey={this.props.searchKey}
                        searchHandler={this.props.searchHandler}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            border: '1px solid #555',
                            backgroundColor: '#444',
                            color: '#0ff',
                        }}
                    />
                    <div
                        style={{
                            marginTop: '40px',
                            maxHeight: '300px',
                            overflowY: 'auto',
                            backgroundColor: '#333',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <EmployeeList employees={this.props.employees} />
                    </div>
                </div>
            </div>
        );
    }
});


var EmployeePage = React.createClass({
    getInitialState: function() {
        return {employee: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.employeeId).done(function(result) {
            this.setState({employee: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div
                className={"page " + this.props.position}
                style={{
                    backgroundColor: '#333',
                    color: '#0ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    padding: '20px',
                }}
            >
                <div
                    className="card"
                    style={{
                        backgroundColor: '#222',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                        maxWidth: '400px',
                        width: '100%',
                    }}
                >
                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li
                            style={{
                                textAlign: 'center',
                                marginBottom: '20px',
                                color: '#fff',
                            }}
                        >
                            <img
                                className="media-object big"
                                src={
                                    "pics/" +
                                    this.state.employee.firstName +
                                    "_" +
                                    this.state.employee.lastName +
                                    ".jpg"
                                }
                                alt={this.state.employee.firstName + " " + this.state.employee.lastName}
                                style={{
                                    borderRadius: '50%',
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    marginBottom: '10px',
                                }}
                            />
                            <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0', color: '#0ff' }}>
                                {this.state.employee.firstName} {this.state.employee.lastName}
                            </h1>
                            <p style={{ fontSize: '14px', color: '#ccc' }}>
                                {this.state.employee.title}
                            </p>
                        </li>
                        {[
                            {
                                href: "tel:" + this.state.employee.officePhone,
                                iconClass: "icon icon-call",
                                label: "Call Office",
                                value: this.state.employee.officePhone,
                            },
                            {
                                href: "tel:" + this.state.employee.mobilePhone,
                                iconClass: "icon icon-call",
                                label: "Call Mobile",
                                value: this.state.employee.mobilePhone,
                            },
                            {
                                href: "sms:" + this.state.employee.mobilePhone,
                                iconClass: "icon icon-sms",
                                label: "SMS",
                                value: this.state.employee.mobilePhone,
                            },
                            {
                                href: "mailto:" + this.state.employee.email,
                                iconClass: "icon icon-email",
                                label: "Email",
                                value: this.state.employee.email,
                            },
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#444',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    margin: '10px 0',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <a
                                    href={item.href}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <span
                                        className={item.iconClass}
                                        style={{
                                            fontSize: '20px',
                                            marginRight: '10px',
                                            color: '#0ff',
                                        }}
                                    ></span>
                                    <div style={{ flex: 1 }}>
                                        <strong style={{ fontSize: '16px', color: '#0ff' }}>
                                            {item.label}
                                        </strong>
                                        <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#ccc' }}>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            employees: []
        }
    },
    searchHandler: function(searchKey) {
        employeeService.findByName(searchKey).done(function(employees) {
            this.setState({
                searchKey:searchKey,
                employees: employees,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} employees={employees}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} employees={this.state.employees}/>);
        }.bind(this));
        router.addRoute('employees/:id', function(id) {
            this.slidePage(<EmployeePage key="details" employeeId={id} service={employeeService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);