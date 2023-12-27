import { stub, spy, mock, createSandbox, createStubInstance } from "sinon";
import { should, use, expect, assert } from "chai";
import { tags } from "../src/utils/constants.js";
import chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);
should();

class TestBase {
    constructor(path, tag) {
        this.stub = stub;
        this.spy = spy;
        this.sinonMock = mock;
        this.expect = expect;
        this.assert = assert;
        this.createStubInstance = createStubInstance;
        this.restoreMethods = [];
        if(tag === tags.TAG_MODEL) this.model = path;
        else if (tag === tags.TAG_CONTROLLER) this.controller = path;
        else if (tag === tags.TAG_SERVICE) this.service = path;
        else this.utils = path;
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
        this.initialize();
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

    test() {}

    run() {
        let describeName;
        if (this.controller) describeName = this.controller.constructor.name;
        else if(this.service) describeName = this.service.constructor.name;
        else if(this.model) describeName = this.model.name;
        else describeName = tags.TAG_UTILS;

        describe(describeName, () => {
            if(this.controller || this.service || this.utils) {
                beforeEach(() => {
                    this.stub = this.sandbox.stub.bind(this.sandbox);
                    this.spy = this.sandbox.spy.bind(this.sandbox);
                    this.sinonMock = this.sandbox.mock.bind(this.sandbox);
                    process.env.NODE_ENV = 'test';
                });
                afterEach(() => {
                    process.env.NODE_ENV = 'test';
                    this.sandbox.restore();
                });
            }
            this.test();
        })
    }
}

export default TestBase;