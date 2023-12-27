import { stub, spy, mock, createSandbox, createStubInstance } from "sinon";
import { should, use, expect, assert } from "chai";
import chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);
should();

class TestBase {
    constructor(path, isModel) {
        this.stub = stub;
        this.spy = spy;
        this.sinonMock = mock;
        this.expect = expect;
        this.assert = assert;
        this.createStubInstance = createStubInstance;
        this.restoreMethods = [];
        if(isModel) this.model = path;
        else this.controller = path;
        this.sandbox = createSandbox({
            injectInto: null,
            properties: ['spy', 'stub', 'mock', 'server', 'clock', 'requests'],
            useFakeTimers: false,
            useFakeServers: false,
        })
        this.expectedErrorResponse = {
            message: 'error',
            code: 400,
            data: {}
        };
        this.expectedSuccessResponse = {
            message: 'success',
            code: 200,
            data: {}
        };
        this.initialize(path, isModel);
    }

    initialize() {
        this.status = stub();
        this.json = spy();
        this.res = {};
        this.status.returns(this.res);
        this.res.json = this.json;
        this.res.end = stub();
        this.res.send = () => {};
        this.methods = {
            where: function () {
                return this;
            },
            nin: function () {
                return this;
            },
            in: function () {
                return this;
            },
            or: function () {
                return this;
            },
            distinct: function () {
                return this;
            },
            skip: function () {
                return this;
            },
            limit: function () {
                return this;
            },
            sort: function () {
                return this;
            },
            count: function () {
                return {
                    exec: function () {
                        return Promise.resolve(1);
                    }
                }
            },
            exec: function () {
                return Promise.resolve();
            }
        }
    }

    async importPath(path, isModel) {
        try {
            let importedPath;
            if(isModel) importedPath = await import(path);
            else importedPath = await import(path);
            
            return importedPath;
        } catch (error) {
            console.log(error);
        }
    }

    restore() {
        this.restoreMethods.forEach(method => {
            if(method.restore) method.restore();
        });
    }

    test() {}

    run() {
        const describeName = this.controller ? this.controller.constructor.name : `${this.model.modelName} ${this.model.name}`;

        describe(describeName, () => {
            if(this.controller) {
                beforeEach(() => {
                    this.stub = this.sandbox.stub.bind(this.sandbox);
                    this.spy = this.sandbox.spy.bind(this.sandbox);
                    this.sinonMock = this.sandbox.mock.bind(this.sandbox);
                    process.env.NODE_ENV = 'test';
                });
                afterEach(() => {
                    process.env.NODE_ENV = 'test';
                    this.restore();
                    this.sandbox.restore();
                });
            }
            this.test();
        })
    }
}

export default TestBase;