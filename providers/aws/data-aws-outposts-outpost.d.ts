import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsOutpostConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html#name DataAwsOutpostsOutpost#name}.
     */
    readonly name?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost}.
 */
export declare class DataAwsOutpostsOutpost extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsOutpostConfig);
    get arn(): string;
    get availabilityZone(): string;
    get availabilityZoneId(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get ownerId(): string;
    get siteId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
