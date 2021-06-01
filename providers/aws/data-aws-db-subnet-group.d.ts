import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html#name DataAwsDbSubnetGroup#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html aws_db_subnet_group}.
 */
export declare class DataAwsDbSubnetGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_subnet_group.html aws_db_subnet_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsDbSubnetGroupConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): string;
    get subnetIds(): string[];
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
