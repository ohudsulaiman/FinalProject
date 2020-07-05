import React from "react";
import Video from "../components/Video";
import data from "../data/videos.json";
import Header from "../components/Header";
import * as token from "../components/helpers";
class VideoPage extends React.Component {
    state = {
        datavideo: [],
        takelink: this.props.match.params.id,
    };
    showTraning = () => {
        return fetch(`http://localhost:5000/showTraning/${this.state.takelink}`, {
            method: "get",
            headers: {
                "content-type": `application/json`,
                authorization: ` ${token.getCookie("tokon")}`,
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
                throw new Error("can't delete the card ");
            })
            .then((res) => {
                this.setState({ datavideo: res });
            })
            .catch((e) => console.log(e));
    };
    componentDidMount() {
        this.showTraning();
    }
    render() {
        return (
            <>
                <Header {...this.props} />
                <Video datavideo={this.state.datavideo} />
            </>
        );
    }
}
export default VideoPage;
