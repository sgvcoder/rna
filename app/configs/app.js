let baseStyle = {
	view: {
        justifyContent: 'flex-start',        
    },
    viewPadding: {
        marginTop: 10,
        padding: 20,
        paddingTop: 10
    },
    a: {
        fontStyle: 'italic',
        color: '#FFAA00'
    },
    b: {
        fontWeight: 'bold'
    },
    p: {
        textAlign: 'left',
        marginBottom: 10
    },
    
    center: {
        alignItems: 'center'
    },
    loader: {
        flex: 1,
        alignItems: 'center'
    }
};

module.exports = {

	version: "1.0.1",
	serverApiUrl: "http://192.168.1.103/test/json/",

	baseStyle: baseStyle

};