const issues = [
    {
        id: 1,
        status: "New",
        owner: "Ravan",
        effort: 5,
        created: new Date("2018-08-15"),
        due: undefined,
        title: "Error in console when clicking Add",
    },
    {
        id: 2,
        status: "Assigned",
        owner: "Eddie",
        effort: 14,
        created: new Date("2018-08-16"),
        due: new Date("2018-08-30"),
        title: "Missing bottom border on panel",
    },
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div> This is a placeholder for the issue filter. </div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const rowStyle = { border: "1px solid silver", padding: 4 };
        const issueRows = issues.map(issue => <IssueRow rowStyle={rowStyle} issue={issue} />);

        return (
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={rowStyle}> ID </th>
                        <th style={rowStyle}> Title </th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;

        return (
            <tr>
                <td style={style}> {this.props.issue_id} </td>
                <td style={style}> {this.props.children} </td>
            </tr>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div> This is a placeholder for a form to add an issue. </div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1> Issue Tracker </h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        );
    }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById("content"));
