var ImgFigure = React.createClass({
    handleClick : function(){
        if(this.props.imgFigureArr.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
    },
    render: function () {
        var styleObj = {
            top: this.props.imgFigureArr.pos.top,
            left: this.props.imgFigureArr.pos.left,
            transform: "rotate(" + this.props.imgFigureArr.rotate + "deg)"
        };
        if(this.props.imgFigureArr.isInverse){
            styleObj.transform = "rotateY(180deg)";
        }
        return (
            <figure className="img-figure" style={styleObj} onClick={this.handleClick}>
                <img src={"img/" + this.props.data.fileName}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <div>{this.props.data.desc}</div>
                </figcaption>
            </figure>
        );
    }
});

var Controller = React.createClass({
    handleClick : function(){
        if(this.props.imgFigureArr.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
    },
    render: function () {
        var ctrlClass = "ctrl";
        if(this.props.imgFigureArr.isCenter){
            ctrlClass += " is-center"
            if(this.props.imgFigureArr.isInverse){
                ctrlClass += " is-inverse";
            }
        }
        return (
            <span className={ctrlClass} onClick={this.handleClick}></span>
        );
    }
});

var Photowall = React.createClass({
    getInitialState: function () {
        return {
            imgFigureArr: [{
                pos: {
                    top: 0,
                    left: 0
                },
                rotate: 0,
                isCenter: false,
                isInverse: false
            }]
        };
    },
    const: {
        centerPos: {
            top: 0,
            left: 0
        },
        xLeftMin: 0,
        xLeftMax: 0,
        xRightMin: 0,
        xRightMax: 0,
        yMin: 0,
        yMax: 0
    },
    componentDidMount: function () {
        //获取图片和舞台的真实dom，计算宽度和高度
        var stageDOM = this.refs.stage,
            wStageDOM = stageDOM.offsetWidth,
            hStageDOM = stageDOM.offsetHeight,
            wHalfStageDOM = wStageDOM / 2,
            hHalfStageDOM = hStageDOM / 2;
        var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure),
            wImgFigureDOM = imgFigureDOM.offsetWidth,
            hImgFigureDOM = imgFigureDOM.offsetHeight,
            wHalfImgFigureDOM = wImgFigureDOM / 2,
            hHalfImgFigureDOM = hImgFigureDOM / 2;
        //计算图片位置的取值范围
        this.const = {
            centerPos: {
                top: hHalfStageDOM - hHalfImgFigureDOM,
                left: wHalfStageDOM - wHalfImgFigureDOM
            },
            xLeftMin: -wHalfImgFigureDOM,
            xLeftMax: wHalfStageDOM - 3 * wHalfImgFigureDOM,
            xRightMin: wHalfStageDOM + wHalfImgFigureDOM,
            xRightMax: wStageDOM - wHalfImgFigureDOM,
            yMin: -hHalfImgFigureDOM,
            yMax: hStageDOM - hHalfImgFigureDOM
        };
        this.rearrage(0);
    },
    rearrage : function(centerIdx){
        var imgFigureInfo = this.state.imgFigureArr;
        for (var i = 0; i < imgFigureInfo.length; i++) {
            if (i < imgFigureInfo.length / 2) {
                imgFigureInfo[i].pos = {
                    top: getRandom(this.const.yMin, this.const.yMax),
                    left: getRandom(this.const.xLeftMin, this.const.xLeftMax)
                };
            } else {
                imgFigureInfo[i].pos = {
                    top: getRandom(this.const.yMin, this.const.yMax),
                    left: getRandom(this.const.xRightMin, this.const.xRightMax)
                };
            }
            imgFigureInfo[i].rotate = getRandom(-30, 30);
            imgFigureInfo[i].isCenter = false;
            imgFigureInfo[i].isInverse = false;
        }
        imgFigureInfo[centerIdx].pos = this.const.centerPos;
        imgFigureInfo[centerIdx].rotate = 0;
        imgFigureInfo[centerIdx].isCenter = true;

        this.setState({
            imgFigureArr: imgFigureInfo
        });
    },
    center : function(centerIdx){
        return function(){
            this.rearrage(centerIdx);
        }.bind(this);
    },
    inverse : function(centerIdx){
        return function(){
            this.state.imgFigureArr[centerIdx].isInverse = !this.state.imgFigureArr[centerIdx].isInverse;
            this.setState({
                imgFigureArr: this.state.imgFigureArr
            });
        }.bind(this);
    },
    render: function () {
        var imgArr = [];
        var ctrlArr = [];
        imgDatas.forEach(function (value, index) {
            //给state设置初始值
            if (!this.state.imgFigureArr[index]) {
                this.state.imgFigureArr[index] = {
                    pos: {
                        top: 0,
                        left: 0
                    },
                    rotate: 0,
                    isCenter: false,
                    isInverse: false
                }
            }
            imgArr.push(<ImgFigure key={index} data={value}
                                   imgFigureArr={this.state.imgFigureArr[index]} ref="imgFigure"
                                   center={this.center(index)} inverse={this.inverse(index)}/>);
            ctrlArr.push(<Controller key={index} imgFigureArr={this.state.imgFigureArr[index]}
                                     center={this.center(index)} inverse={this.inverse(index)}/>);
        }.bind(this));
        return (
            <section className="stage" ref="stage">
                <section>
                    {imgArr}
                </section>
                <nav>
                    {ctrlArr}
                </nav>
            </section>
        );
    }
});

ReactDOM.render(
    <Photowall/>,
    document.getElementById("photowall")
);

function getRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}
