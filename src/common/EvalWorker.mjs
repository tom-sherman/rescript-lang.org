// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Eval from "./Eval.mjs";
import * as Curry from "rescript/lib/es6/curry.js";

var evaluateCode = (function (code, handlers) {
    const rawConsole = console;
    try {
      // TODO: For some reason this isn't capturing logs...
      const replace = {
        log: function (...args) { handlers.onConsoleLog(args) },
        warn: function (...args) { handlers.onConsoleWarn(args) },
        error: function (...args) { handlers.onConsoleError(args) }
      };
      self.console = Object.assign({}, rawConsole, replace);
      eval(code);
      handlers.onDone()
    } catch (exn) {
      handlers.onException(exn);
    }
    self.console = rawConsole
  });

var dispatch = Eval.EvalWorker.$$Worker.postMessage;

Curry._2(Eval.EvalWorker.$$Worker.onMessage, Eval.EvalWorker.$$Worker.self, (function (msg) {
        var code = msg.data;
        if (code.TAG !== /* Evaluate */0) {
          return ;
        }
        var code$1 = code._0;
        return evaluateCode(code$1, {
                    onConsoleLog: (function (logArgs) {
                        return Curry._1(dispatch, {
                                    TAG: 3,
                                    forCode: code$1,
                                    logArgs: logArgs,
                                    [Symbol.for("name")]: "Log"
                                  });
                      }),
                    onConsoleWarn: (function (logArgs) {
                        return Curry._1(dispatch, {
                                    TAG: 3,
                                    forCode: code$1,
                                    logArgs: logArgs,
                                    [Symbol.for("name")]: "Log"
                                  });
                      }),
                    onConsoleError: (function (logArgs) {
                        return Curry._1(dispatch, {
                                    TAG: 3,
                                    forCode: code$1,
                                    logArgs: logArgs,
                                    [Symbol.for("name")]: "Log"
                                  });
                      }),
                    onException: (function (exn) {
                        return Curry._1(dispatch, {
                                    TAG: 2,
                                    forCode: code$1,
                                    exn: exn,
                                    [Symbol.for("name")]: "Exception"
                                  });
                      }),
                    onDone: (function (param) {
                        return Curry._1(dispatch, {
                                    TAG: 1,
                                    forCode: code$1,
                                    [Symbol.for("name")]: "Success"
                                  });
                      })
                  });
      }));

export {
  evaluateCode ,
  dispatch ,
  
}
/*  Not a pure module */