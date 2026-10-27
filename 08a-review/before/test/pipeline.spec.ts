import { expect } from "chai";
import { UnitTestAndIntegrationTestPipeline } from "../src/pipeline";
import { PipeLine } from "../src";

export class FakeFailUnitTest implements PipeLine {
    name(): string {
        throw new Error("Method not implemented.");
    }
    run(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}

describe("UnitTestAndIntegrationTestPipeline", () => {
	it("is named properly", () => {
		const unitAndIntegration = new UnitTestAndIntegrationTestPipeline();
		expect(unitAndIntegration.name).to.be.equal("Unit Tests and Integration Tests");
	});

	it("terminates early if unit testing fails", () => {
		const unitAndIntegration = new UnitTestAndIntegrationTestPipeline();
		// can we test this???
	});

	it("returns true if unit testing and integration testing pass", () => {
		const unitAndIntegration = new UnitTestAndIntegrationTestPipeline();
		// can we test this???
	});
});
