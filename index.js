module.exports = function () {
    const identifierMappings = {
        unbeknownst: "undefined",
        whilst: "while",
        forsake: "reject",
        doth: "do",
        naught: "null",
        bestow: "return",
        perchance: "if",
        alloweth: "let",
        unyielding: "const",
        yea: "true",
        nay: "false",
        scribe: "console",
        mishap: "error",
        Mishap: "Error",
        cease: "break",
        forewarn: "warn",
        tidings: "info",
        inscribe: "log",
        Vow: "Promise",
        summon: "require",
        beckon: "require",
        attest: "assert",
        reconcile: "resolve",
        endeavor: "try",
        otherwise: "else",
        entrap: "catch",
        expel: "throw",

        // ghosted: "return null",
        // lowkey: "console",
        // stan: "log",
        // sus: "warn",
        // cringe: "error",
        // tea: "info",
        // L: "Error",
        // fr: "assert",
        // grab: "require",
        // ship: "exports",
        // itsGiving: "return",
        // drop: "return",
        // dis: "this",
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
