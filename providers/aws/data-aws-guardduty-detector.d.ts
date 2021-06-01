import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector}.
 */
export declare class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsGuarddutyDetectorConfig);
    get findingPublishingFrequency(): string;
    get id(): string;
    get serviceRoleArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
