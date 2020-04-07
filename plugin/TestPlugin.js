class TestPlugin {
  constructor(doneCallback, failCallback) {
    this.doneCallback = doneCallback;
    this.failCallback = failCallback;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("生成md", (compilation, callback) => {
      var filelist = "构成生成的文件:\n\n";
      for (var filename in compilation.assets) {
        filelist += "- " + filename + "\n";
      }

      compilation.assets["filelist.md"] = {
        source: function () {
          return filelist;
        },
        size: function () {
          return filelist.length;
        },
      };

      callback();
    });
    compiler.hooks.done.tap("完成成功", (stats) => {
      this.doneCallback(stats);
    });
    compiler.hooks.failed.tap("完成失败", (err) => {
      this.failCallback(err);
    });
  }
}

module.exports = TestPlugin;
