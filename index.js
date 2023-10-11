module.exports = function () {
    const identifierMappings = {
        unbeknownst: "undefined",
        forsake: "reject",
        naught: "null",
        bestow: "return",
        yea: "true",
        nay: "false",
        scribe: "console",
        proclaim: "log",
        mishap: "error",
        cease: "break",
        forewarn: "warn",
        tidings: "info",
        inscribe: "log",
        Vow: "Promise",
        summon: "require",
        beckon: "require",
        attest: "assert",
        reconcile: "resolve",
        entrap: "catch",
        Mishap: "Error",
    };

    const handleIdentifier = (path) => {
        const newName = identifierMappings[path.node.name];
        if (newName) {
            path.node.name = newName;
        }
    };

    const handleExpressionStatement = (path) => {
        const { node } = path;

        if (
            node.expression.type === "CallExpression" &&
            node.expression.callee.name === "expel"
        ) {
            const errorArgument = node.expression.arguments[0];
            const throwStatement = {
                type: "ThrowStatement",
                argument: errorArgument,
            };
            path.replaceWith(throwStatement);
        }
    };

    return {
        visitor: {
            Identifier: handleIdentifier,
            ExpressionStatement: handleExpressionStatement,
        },
    };
};
