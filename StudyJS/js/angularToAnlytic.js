/**
 * Created by suyanlong on 2016/10/6.
 */
function annotate(fn) {
    var $inject,
        fnText,
        argDecl,
        last;

    if (typeof fn == 'function') {
        if (!($inject = fn.$inject)) {
            $inject = [];
            if (fn.length) {
                fnText = fn.toString().replace(STRIP_COMMENTS, '');
                argDecl = fnText.match(FN_ARGS);
                forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg){
                    arg.replace(FN_ARG, function(all, underscore, name){
                        $inject.push(name);
                    });
                });
            }
            fn.$inject = $inject;
        }
    } else if (isArray(fn)) {
        last = fn.length - 1;
        assertArgFn(fn[last], 'fn');
        $inject = fn.slice(0, last);
    } else {
        assertArgFn(fn, 'fn', true);
    }
    return $inject;
}

