/*
 * @Author: Administrator
 * @Date:   2017-01-11 15:05:00
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-01-12 00:10:51
 */

// 'use strict';
//小鸟的构造函数
(function(Fly) {
    // 创建鸟的构造函数
    var Bird = function(config) {
        // 获取上下文
        this.context = config.context;
        // 获取图片
        this.img = config.img;
        // console.log(this.img);
        this.y = config.y || 100;
        this.imgW = this.img.width / 3;
        // console.log(this.imgW);
        this.imgH = this.img.height;
        // 加速的
        this.a = 0.0005;
        
        this.speed = 0;
        // 计算旋转角度
        this.maxAngle = 45;
        this.maxSpeed = 0.5;
        this.curAngle = 0;
        this.step = 0;
        // var bX0 = 100       

    };
    // 原型
    Bird.prototype.render = function(deltaTime) {
            if (this.speed > this.maxSpeed) {
                this.speed = this.maxSpeed;
            } else if (this.speed < -this.maxSpeed) {
                this.speed = -this.maxSpeed;
            };
            //改变角度
            this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
            this.context.translate(100, this.y);
            this.context.rotate(toRadian(this.curAngle));
            //小鸟扇翅膀
            
            this.context.drawImage(this.img, this.step++ * this.imgW, 0, this.imgW, this.imgH, -1 / 2 * this.imgW, -1 / 2 * this.imgH, this.imgW, this.imgH);
            this.step %= 3;
            // console.log(this.step)
            // 调用计算下一帧位置的方法
            this.calsPostition(deltaTime);
        }
        // 计算小鸟下一帧的位置
    Bird.prototype.calsPostition = function(deltaTime) {
            //设置小鸟落下
            this.y += this.speed * deltaTime + 1 / 2 * this.a * deltaTime * deltaTime;
            
            // console.log(this.a)
            // console.log(this.y)
            this.speed += this.a * deltaTime;
        }
        // 改变小鸟速度的方法
    Bird.prototype.changeSpeed = function(cSpeed) {
        this.speed = cSpeed;
    }

    Fly.Bird = Bird;
})(window.Fly)
