function HeaderComponent() {
    const dateBuilder = (d) => {
      var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
      
      return `Today is ${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]}  ${d.getDate()} ${d.getFullYear()}`;
    };

    return (
        <div className="header">
          <h1 className="mb-3">{dateBuilder(new Date())}</h1>
        </div>
    );
}

export default HeaderComponent;